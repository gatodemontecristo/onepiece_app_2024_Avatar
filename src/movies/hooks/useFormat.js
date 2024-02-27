export const useFormat = () => {
    const getYear = (date = "2024") => date.split("-")[0];
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

    return{
        getYear,
        getRealTime
    }
}