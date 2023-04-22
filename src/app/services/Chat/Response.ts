
export interface Response {
  id: String;
  object: String;
  created: number;
  model: String;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: [
    {
        message:  {
            role: String,
            content: String
        },
        finish_reason: String,
        index: number
    }
]
}


