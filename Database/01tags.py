import requests
from bs4 import BeautifulSoup
with open("sample.html","r") as f:
    html_doc= f.read()
soup = BeautifulSoup(html_doc, 'html.parser') 
#print(soup.prettify())
# for link in soup.find_all("a"):  # find all the anchor tag 
#     print (link.get("href"))

#     print(link.get_text())  # it gives all the text we want
s=soup.find(id="link3") #it gives us the all the link
    
    # print(s.get("href"))
    
    # print (soup.select("div.italic")) # it gives us the required all the italic division part
    # print (soup.select("span#italic")) # we get all the elements that are italic
    
    # print(soup.span.get("class")) # html doc maa vako span ko vitra ko class dinxa
    
# print(soup.find_all(class_="italic")) # find---> finds only one class and find_all----> finds all class

# for child  in soup.find(class_="container").children: # find children class with in a class
    # print(child)
# for parent in soup.find(class_="box").parents: # to find the parent class; if any parent class consider another parent then it prints all those parent class
    # print(parent)
    
# cont = soup.find(class_="container") # it modifies class into span in html code
# cont.name="span"
# cont["class"]="myclass" #it changes and upgrade the class name
# cont.string="I am a string"# it chandes the details inside the class;modification
# print(cont)

# ulTag = soup.new_tag("ul") #tag append with modified file name  

# liTag = soup.new_tag("li")
# liTag.string="honey"
# ulTag.append(liTag)

# liTag = soup.new_tag("li")
# liTag.string="ram ram"
# ulTag.append(liTag)

# soup.html.body.insert(0, ulTag)
# with open("modified.html ","w")as f:
#     f.write(str(soup))

# cont=soup.find(class_="container") #it hepls to find the attribute is present in class or not
# print(cont.has_attr("contentenditable"))

def has_class_but_not_id(tag):
    return tag.has_attr("class") and not tag.has_attr("id") #it returns a function which has class as attr but not id as attr

def has_content(tag):
    return tag.has_attr("content")



# results= soup.find_all(has_class_but_not_id)
results= soup.find_all(has_content) #it takes functions and gives corresponding tages which are true gives in print format
for result in results:
 print(results, "\n\n")
