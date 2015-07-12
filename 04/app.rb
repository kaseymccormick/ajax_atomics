require "sinatra"

get "/" do
  erb :"home"
end

get "/:msg" do
  message = params["msg"]
  if (params["msg"]) = capital letter
    return "You wrote #{message}, is that your name?"
  elsif (params["msg"]) = #)
    return "You wrote #{message}, is that how old you are?"
  else  
  return "You wrote #{message}. Whatever"
end