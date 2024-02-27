export const useFormat = () => {
    const getYear = (date = "2024") => date.split("-")[0];
    const getRating = (rating = "R") => rating.split(" - ")[0];
    const getRealTime = (duration="1 hr") =>{
        let time = duration.split(" ");
        if(time.length==4){
            return Number(time[0]) * 100 + Number(time[2]);
        }else if(time.length==2 && time[1] == "hr"){
            return Number(time[0]) * 100;
        }else{
            return Number(time[0]);

        }
    }

    const startMovie = (vote = 0) => {
        return vote / 2;
      };
    
      const objectLines = (dataObj = []) => {
        let stringObject = "";
        dataObj.forEach((data, index) => {
          if (index == dataObj.length - 1) {
            stringObject = stringObject + data.name;
          } else {
            stringObject = stringObject + data.name + "/";
          }
        });
        return stringObject;
      };

    return{
        getYear,
        getRealTime,
        getRating,
        startMovie,
        objectLines
    }
}