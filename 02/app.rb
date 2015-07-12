require "sinatra"

get "/home" do
  erb :"home"
end

get "/path1" do
  return "yes"
end

get "/path2" do
  erb :"view2"
end