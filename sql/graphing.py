import matplotlib.pyplot as plt

def main():
    file1 = open("averages.txt","r")
    averages_data = file1.read()
    file1.close()

    file2 = open("column_names.txt","r")
    column_data = file2.read()
    file2.close()
    x = column_data.split("\n")
    column_names = []
    for element in x:
        column_names.append(element.split("|")[0])
    

    temp = [[],[],[],[],[],[],[],[],[],[],[]]
    data = []
    years = []
    try:
        averages_data_list = averages_data.split("\n")
        for element in averages_data_list:
            years.append(element.split("|")[1])
            data.append(element.split("|"))
    except:
        pass


    try:
        for count,item in enumerate(temp):
            for element in data:
                item.append(element[count+1])
    except:
        pass


    
    for element in temp:
        print(element)


    for number in range(len(temp)):
        temp2 = []
        for element in temp[number+1]:
            temp2.append(float(element))

        plt.title(column_names[number])
        plt.xlabel("years")
        plt.ylabel("averages")
        plt.plot(years,temp2)
        plt.show()




if __name__ == "__main__":
    main()
