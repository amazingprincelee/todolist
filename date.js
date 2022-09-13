exports.getDate = function (){

    const today = new Date();
        const currentDay = today.getDay();
    
        option = {
            weekday: "long",
            day: "numeric",
            month: "long"
    
        };
    
        return today.toLocaleDateString("en-US", option);
    
        
    
    };
    