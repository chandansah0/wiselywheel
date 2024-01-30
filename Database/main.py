import requests

def fetchAndSaveToFile(url,path):
    r=requests.get(url)
    with open(path, "w") as f:
        f.write(r.text)
    
url="https://honda.com.np/motorcycle/hornet-2-0/"
fetchAndSaveToFile(url,"data1/hornet2.0")