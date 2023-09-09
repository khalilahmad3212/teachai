import openai
import config

openai.api_key = config.DevelopmentConfig.OPENAI_KEY

def detect_ai(text):
    response = openai.Completion.create(
      engine="text-davinci-002",
      prompt=f"As an AI developed by OpenAI, you've processed countless pieces of text - both human-written and AI-generated. I'm going to provide you with a piece of text. Based on your computational ability, I want you to estimate the percentage likelihood that this text was generated by an AI like you.The following is how your answer should always be exactlylike this:\n Ai percentage: [percentage]% .\n Here is the text: :\n\n{text}\n",
      temperature=0.5,
      max_tokens=150
    )
    return response.choices[0].text.strip()
