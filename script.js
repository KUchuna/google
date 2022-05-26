let language = document.getElementById("language");
let georgian = true;

language.onclick = function() {
    if(georgian==true){
        document.getElementById("photos").innerHTML = "Images";
        document.getElementById("search").innerHTML = "Google Search";
        document.getElementById("lucky").innerHTML = "I'm Feeling Lucky";
        document.getElementById("selector").innerHTML = "Google offered in:";
        language.innerHTML = "ქართული";
        document.getElementById("location").innerHTML = "Georgia";
        document.getElementById("about").innerHTML = "About";    
        document.getElementById("ad").innerHTML = "Advertising";    
        document.getElementById("business").innerHTML = "Business";    
        document.getElementById("how").innerHTML = "How Search Works";    
        document.getElementById("secret").innerHTML = "Privacy";    
        document.getElementById("rules").innerHTML = "Terms";    
        document.getElementById("settings").innerHTML = "Settings";
        
        georgian = false;
    }else if(georgian==false){
        document.getElementById("photos").innerHTML = "სურათები";
        document.getElementById("search").innerHTML = "Google ძიება";
        document.getElementById("lucky").innerHTML = "იღბალს მივენდობი";
        document.getElementById("selector").innerHTML = "Google ხელმისაწვდომია შემდეგ ენაზე:";
        language.innerHTML = "English";
        document.getElementById("location").innerHTML = "საქართველო";
        document.getElementById("about").innerHTML = "შესახებ";    
        document.getElementById("ad").innerHTML = "რეკლამა";    
        document.getElementById("business").innerHTML = "ბიზნესისთვის";    
        document.getElementById("how").innerHTML = "როგორ მუშაობს ძიება";    
        document.getElementById("secret").innerHTML = "კონფედენციალური";    
        document.getElementById("rules").innerHTML = "წესები";    
        document.getElementById("settings").innerHTML = "პარამეტრები";

        georgian = true;
    }

}