#!/usr/bin/env python3
import openai
import config
import pickle
import json
import ast
from googlesearch import search

def plan_lessons_chat(prompt, id):
    """
    prompt: prompt by user
    id: user ID
    saves json file of chat history
    returns: response content
    """
    openai.api_key = config.DevelopmentConfig.OPENAI_KEY
    completion = openai.ChatCompletion()
    model = "gpt-3.5-turbo"
    system = "You are a helpful assistant for teachers, designed to provide relevant resources and activities for lesson planning based on the subject, grade level, and learning objectives. Your primary goal is to assist teachers in finding recommendations on specific topics or skills and offer a list of resources and activities tailored to their needs, only answer questions related to your task."
    messages = None
    filename = "{}_history.json".format(id)

    try:
        with open(filename, 'r') as openfile:
            messages = json.load(openfile)
    except:
        messages = None

    final_prompt = f"""As a helpful assistant for teachers, your task is to provide relevant resources and activities for lesson planning, focusing on the subject, grade level, and learning objectives. When a teacher asks for recommendations on specific topics or skills, offer a list of resources and activities tailored to their needs. Be proactive in offering assistance, clarifying any ambiguities, and guiding teachers through the process of selecting and using the resources provided. Maintain a polite, respectful, and empathetic tone, and always strive to exceed the teacher's expectations with your helpfulness and resourcefulness. Do not provide any links if you're providing resources or videos but instead give the teacher a precise query to search on google.Only answer questions related to your task do not engage in anything outside the scope of helping the teacher to plan their lessons, the teacher's message: "{
                prompt}", Do not respond if the message is not related to lesson planning, remember do not provide links"""
    if not messages:
        #get_links = True
        messages = [
            {"role": "system", "content": system},
            {"role": "user", "content": final_prompt}
        ]
    else:
        #get_links = False
        messages.append({"role": "user", "content": final_prompt})

    response = completion.create(model=model, messages=messages)
    message = response['choices'][0]['message']
    #if get_links == True:
    link = []
    try:
        que = get_queries(message['content'])
        queries = ast.literal_eval(que)
        links_string = "\n links: \n"
        for j in queries:
            try:
                link = get_first_link(j)
            except Exception as f:
                print(f)
            links_string += j + " : " + link + "\n"
        message['content'] += links_string
    except Exception as e:
        print(f"Error: {e}")

    messages.append(message)
    with open(filename, "w") as outfile:
        json.dump(messages, outfile)
    return message['content'].replace('\n','<br>' )

def get_first_link(query):
    """
    query: string
    Searches Google for query,
    and returns the link to the first result
    """
    url = list(search(query, tld="co.in", num=1, stop=1, pause=2))
    return url[0]

def get_queries(plan):
    """
    gets search queries from gpt3 response
    """
    openai.api_key = config.DevelopmentConfig.OPENAI_KEY
    completion = openai.ChatCompletion()
    prompt = f""": Generate a list of search queries for a lesson plan here's some examples:Example 1:
Lesson plan: "In this history lesson for high school students, we will focus on the American Civil War. Here are some resources and activities to include in your lesson:

1. "The American Civil War Overview Video" - Show this video to your students to provide a brief overview of the American Civil War. You can find it by searching on Google for "The American Civil War Overview Video for High School Students" and clicking on the YouTube results.

2. "Civil War Interactive Timeline" - This online activity from the Library of Congress allows students to explore the events of the American Civil War through an interactive timeline. You can find it by searching on Google for "Library of Congress Civil War Interactive Timeline."

3. "The Causes of the Civil War Group Discussion" - Divide your students into groups and have them discuss the various causes of the American Civil War. You can find a list of causes and discussion prompts on the National Archives website by searching on Google for "National Archives Causes of the Civil War."

I hope these resources and activities are helpful to you in planning your lesson on the American Civil War! Let me know if you need further assistance."

Desired output: ["The American Civil War Overview Video for High School Students", "Library of Congress Civil War Interactive Timeline", "National Archives Causes of the Civil War"]

Example 2:
Lesson plan: "In this art lesson for middle school students, we will focus on the elements of art. Here are some resources and activities to include in your lesson:

1. "Elements of Art Introduction Video" - Play this video for your students to introduce them to the elements of art. You can find it by searching on Google for "Elements of Art Introduction Video for Middle School Students" and clicking on the YouTube results.

2. "Elements of Art Interactive Activity" - This online activity from the National Gallery of Art allows students to explore the elements of art through interactive examples and exercises. You can find it by searching on Google for "National Gallery of Art Elements of Art Interactive Activity."

3. "Elements of Art Drawing Exercise" - Have your students create a drawing that incorporates all the elements of art. You can find a step-by-step guide for this exercise on the Artful Parent website by searching on Google for "Artful Parent Elements of Art Drawing Exercise."

I hope these resources and activities are helpful to you in planning your lesson on the elements of art! Let me know if you need further assistance."

Desired output: ["Elements of Art Introduction Video for Middle School Students", "National Gallery of Art Elements of Art Interactive Activity", "Artful Parent Elements of Art Drawing Exercise"]
Example 2:  
lesson plan: "{plan}"

Desired output: """
    messages = [
        {"role": "system", "content": "You generate a list of search queries for a lesson plan"},
        {"role": "user", "content": prompt}
    ]
    response = completion.create(model="gpt-3.5-turbo", messages=messages)
    message = response['choices'][0]['message']
    return message['content']