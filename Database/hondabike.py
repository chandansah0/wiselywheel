import requests
from bs4 import BeautifulSoup

url_api = 'https://honda.com.np/motorcycle/hornet-2-0'
usa_req = requests.get(url_api)

usa_req.status_code

soup = BeautifulSoup(usa_req.content, "html.parser")
s = soup.title.string

a = soup.find_all("a")
# Create a list to store bike descriptions
bike_features = []
for tag in a:
    bike_feature = tag.get_text()
  # print('bike Description:', bike_description)
    
    # Append each bike description to the list
    bike_features.append(bike_feature)
    pa = soup.find_all("p")
    
    # Create a list to store bike descriptions
bike_descriptions = []

 
# for tag in b:
#   bike_colour.append(bike_colour)
for tag in pa:
    bike_description = tag.get_text()
    # print('bike Description:', bike_description)
    
    # Append each bike description to the list
    bike_descriptions.append(bike_description)
  
  
print("********* Bike INFO **************")
print("\n")
#print(pa)
# print(bike_features)

print("Bike Model Name : ", bike_descriptions[0])

# print("Bike Model2 Name : ", bike_descriptions[1])

# print("Bike Model3 Name : ", bike_descriptions[2])

print("Bike price : ", bike_descriptions[1])

print("Bike Discription : ", bike_descriptions[2])

print("Bike Disclaimer : ", bike_descriptions[3])

print("Bike Color : ", bike_descriptions[4])

print("\n")



print("********* bike Feature **************")
print("\n")

print(" 1. ", bike_features[64])

print(" 2. ", bike_features[65])

print(" 3. ", bike_features[66])

print(" 4. ", bike_features[67])

print(" 5. ", bike_features[68])

print(" 6. ", bike_features[69])

print(" 7. ", bike_features[70])

print(" 8. ", bike_features[71])

print(" 9. ", bike_features[72])

print(" 10. ", bike_features[73])

print(" 11. ", bike_features[74])

print(" 12. ", bike_features[75])

print(" 13. ", bike_features[76])

# print(" 14. ", bike_features[77])
print("\n")

print("********* Body Dimension **************")
print("\n")

print("bike Length : ", bike_descriptions[5])

print("bike Width : ", bike_descriptions[6])

print("bike Height : ", bike_descriptions[7])

print("bike Wheelbase : ", bike_descriptions[8])

print("bike Ground Clearence : ", bike_descriptions[9])

print("bike Kerb Weight : ", bike_descriptions[10])

print("\n")
print("********* Engine **************")
print("\n")

print("bike Fuel Tank Capacity : ", bike_descriptions[11])

print("bike Starting Method : ", bike_descriptions[12])

print("bike Displacement : ", bike_descriptions[13])

print("bike Max net power : ", bike_descriptions[14])

print("bike Max net torque : ", bike_descriptions[15])

print("bike Compression ratio : ", bike_descriptions[16])

print("bike Stroke : ", bike_descriptions[17])

print("bike Bore : ", bike_descriptions[18])

print("\n")
print("********* Transmission **************")
print("\n")

print("bike No. of gears : ", bike_descriptions[19])

print("bike Gear pattern : ", bike_descriptions[20])

print("bike Max speed : ", bike_descriptions[21])

print("\n")
print("********* Tyre And Breakes **************")
print("\n")

print("\n")
print("------ Front --------")

print("bike Tyre Size : ", bike_descriptions[22])

print("bike Tyre Type : ", bike_descriptions[23])

print("bike Brake type/size : ", bike_descriptions[24])

print("\n")
print("------ Rear --------")

print("bike Tyre Size : ", bike_descriptions[25])

print("bike Tyre Type : ", bike_descriptions[26])

print("bike Brake type/size : ", bike_descriptions[27])

print("\n")
print("********* Frames & Suspension **************")
print("\n")

print("bike Frame type : ", bike_descriptions[28])

print("bike Front suspension : ", bike_descriptions[29])

print("bike Rear suspension : ", bike_descriptions[30])

print("\n")
print("********* Electricals **************")
print("\n")

print("bike Battery : ", bike_descriptions[31])

print("bike Head lamp : ", bike_descriptions[32])

    



# Now you have all bike descriptions in the list
# You can access them using index, e.g., bike_descriptions[0], bike_descriptions[1], etc.
