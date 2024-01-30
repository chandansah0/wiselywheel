import requests
from bs4 import BeautifulSoup

url_api = 'https://honda.com.np/motorcycle/dio-125/'
usa_req = requests.get(url_api)

usa_req.status_code

soup = BeautifulSoup(usa_req.content, "html.parser")
s = soup.title.string

a = soup.find_all("a")
# Create a list to store scooty descriptions
scooty_features = []
for tag in a:
    scooty_feature = tag.get_text()
    # print('Scooty Description:', scooty_description)
    
    # Append each scooty description to the list
    scooty_features.append(scooty_feature)

pa = soup.find_all("p")
# print(pa)

# Create a list to store scooty descriptions
scooty_descriptions = []

for tag in pa:
    scooty_description = tag.get_text()
    # print('Scooty Description:', scooty_description)
    
    # Append each scooty description to the list
    scooty_descriptions.append(scooty_description)

print("********* Scooty INFO **************")
print("\n")

print("Scooty Model1 Name : ", scooty_descriptions[0])

print("Scooty Model2 Name : ", scooty_descriptions[1])

print("Scooty Model3 Name : ", scooty_descriptions[2])

print("Scooty price : ", scooty_descriptions[3])

print("Scooty Discription : ", scooty_descriptions[4])

print("Scooty Disclaimer : ", scooty_descriptions[5])

print("Scooty Color : ", scooty_descriptions[6])

print("\n")
print("********* Scooty Feature **************")
print("\n")

print(" 1. ", scooty_features[66])

print(" 2. ", scooty_features[67])

print(" 3. ", scooty_features[68])

print(" 4. ", scooty_features[69])

print(" 5. ", scooty_features[70])

print(" 6. ", scooty_features[71])

print(" 7. ", scooty_features[72])

print(" 8. ", scooty_features[73])

print(" 9. ", scooty_features[74])

print(" 10. ", scooty_features[75])

print(" 11. ", scooty_features[76])

print(" 12. ", scooty_features[77])

print(" 13. ", scooty_features[78])

print(" 14. ", scooty_features[79])




print("\n")
print("********* Body Dimension **************")
print("\n")

print("Scooty Length : ", scooty_descriptions[7])

print("Scooty Width : ", scooty_descriptions[8])

print("Scooty Height : ", scooty_descriptions[9])

print("Scooty Wheelbase : ", scooty_descriptions[10])

print("Scooty Ground Clearence : ", scooty_descriptions[11])

print("Scooty Kerb Weight : ", scooty_descriptions[12])

print("\n")
print("********* Engine **************")
print("\n")

print("Scooty Fuel Tank Capacity : ", scooty_descriptions[13])

print("Scooty Starting Method : ", scooty_descriptions[14])

print("Scooty Displacement : ", scooty_descriptions[15])

print("Scooty Max net power : ", scooty_descriptions[16])

print("Scooty Max net torque : ", scooty_descriptions[17])

print("Scooty Compression ratio : ", scooty_descriptions[18])

print("Scooty Stroke : ", scooty_descriptions[19])

print("Scooty Bore : ", scooty_descriptions[20])

print("\n")
print("********* Transmission **************")
print("\n")

print("Scooty No. of gears : ", scooty_descriptions[21])

print("Scooty Gear pattern : ", scooty_descriptions[22])

print("Scooty Max speed : ", scooty_descriptions[23])

print("\n")
print("********* Tyre And Breakes **************")
print("\n")

print("\n")
print("------ Front --------")

print("Scooty Tyre Size : ", scooty_descriptions[24])

print("Scooty Tyre Type : ", scooty_descriptions[25])

print("Scooty Brake type/size : ", scooty_descriptions[26])

print("\n")
print("------ Rear --------")

print("Scooty Tyre Size : ", scooty_descriptions[27])

print("Scooty Tyre Type : ", scooty_descriptions[28])

print("Scooty Brake type/size : ", scooty_descriptions[29])

print("\n")
print("********* Frames & Suspension **************")
print("\n")

print("Scooty Frame type : ", scooty_descriptions[30])

print("Scooty Front suspension : ", scooty_descriptions[31])

print("Scooty Rear suspension : ", scooty_descriptions[32])

print("\n")
print("********* Electricals **************")
print("\n")

print("Scooty Battery : ", scooty_descriptions[33])

print("Scooty Head lamp : ", scooty_descriptions[34])

    

# Now you have all scooty descriptions in the list
# You can access them using index, e.g., scooty_descriptions[0], scooty_descriptions[1], etc.