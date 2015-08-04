function ajax_get_json(){
	var results = document.getElementById("results");
    var heroid = document.getElementById("heroid");
    var pKills = document.getElementById("pKills");
    var pLevel = document.getElementById("pLevel");
    var pDeaths = document.getElementById("pDeaths");
    var pAssists = document.getElementById("pAssists");
    var pGold = document.getElementById("pGold");
    var pLH = document.getElementById("pLH");
    var pDN = document.getElementById("pDN");
    var pXPM = document.getElementById("pXPM");
    var pGPM = document.getElementById("pGPM");
    var pHD = document.getElementById("pHD");
    var pTD = document.getElementById("pTD");
    var radiantStatus = document.getElementById("radiantStatus");
    
    var hr = new XMLHttpRequest();
    var hl = new XMLHttpRequest();
    
    var heroData;
    var data;
    var num = 0;
    
    
    
    
    
    hr.open("GET", "result.json", true);
    hr.setRequestHeader("Content-type", "application/json", true);
    hl.open("GET", "heroList.json", true);
    hl.setRequestHeader("Content-type", "application/json", true);
    
   
    hl.onreadystatechange = function(){
        if(hl.readyState == 4 && hl.status == 200){
            heroData = JSON.parse(hl.responseText);
			
            //Radiant Victory or Dire Victory
            if(data.result.radiant_win == true){
                radiantStatus.style.color= "green";
                radiantStatus.innerHTML += "RADIANT VICTORY";
            }else{
                radiantStatus.style.color = "red";
                radiantStatus.innerHTML += "DIRE VICTORY";
            }
            
            //create Radiant table
            var table = document.getElementById("radiantTable");
            table.className = "table table-striped";

            var row = table.insertRow(0);
            row.style.fontWeight = "bold";
            row.className = "text-center";

            var hName = row.insertCell(0);
            hName.className = "text-left";
            var pLevel = row.insertCell(1);
            var pKills = row.insertCell(2);
            var pDeaths = row.insertCell(3);
            var pAssists = row.insertCell(4);
            var pGold = row.insertCell(5);
            var pLH = row.insertCell(6);
            var pDN = row.insertCell(7);
            var pXPM = row.insertCell(8);
            var pGPM = row.insertCell(9);
            var pHD = row.insertCell(10);
            var pTD = row.insertCell(11);

            hName.innerHTML = "Hero";
            pLevel.innerHTML = "Level";
            pKills.innerHTML = "Kills";
            pDeaths.innerHTML = "Deaths";
            pAssists.innerHTML = "Assists";
            pGold.innerHTML = "Gold";
            pLH.innerHTML = "Last Hits";
            pDN.innerHTML = "Denies";
            pXPM.innerHTML = "XP Per Min";
            pGPM.innerHTML = "Gold Per Min";
            pHD.innerHTML = "Hero Damage";
            pTD.innerHTML = "Turret Damage";
            for(var i = 0; i < 5; i++){
                var row = table.insertRow(-1);
                row.className = "text-center";
                
                var hName = row.insertCell(0);
                hName.className = "text-left";
                
                var pLevel = row.insertCell(1);
                var pKills = row.insertCell(2);
                var pDeaths = row.insertCell(3);
                var pAssists = row.insertCell(4);
                var pGold = row.insertCell(5);
                var pLH = row.insertCell(6);
                var pDN = row.insertCell(7);
                var pXPM = row.insertCell(8);
                var pGPM = row.insertCell(9);
                var pHD = row.insertCell(10);
                var pTD = row.insertCell(11);
                
                hName.innerHTML = returnName(data.result.players[i].hero_id);
                pLevel.innerHTML = data.result.players[i].level;
                pKills.innerHTML = data.result.players[i].kills;
                pDeaths.innerHTML = data.result.players[i].deaths;
                pAssists.innerHTML = data.result.players[i].assists;
                pGold.innerHTML = data.result.players[i].gold;
                pLH.innerHTML = data.result.players[i].last_hits;
                pDN.innerHTML = data.result.players[i].denies;
                pXPM.innerHTML = data.result.players[i].xp_per_min;
                pGPM.innerHTML = data.result.players[i].gold_per_min;
                pHD.innerHTML = data.result.players[i].hero_damage;
                pTD.innerHTML = data.result.players[i].tower_damage;
            }
            
            //create radiant table
            var table = document.getElementById("direTable");
            table.className = "table table-striped";

            var row = table.insertRow(0);
            row.style.fontWeight = "bold";
            row.className = "text-center";

            var hName = row.insertCell(0);
            hName.className = "text-left";
            var pLevel = row.insertCell(1);
            var pKills = row.insertCell(2);
            var pDeaths = row.insertCell(3);
            var pAssists = row.insertCell(4);
            var pGold = row.insertCell(5);
            var pLH = row.insertCell(6);
            var pDN = row.insertCell(7);
            var pXPM = row.insertCell(8);
            var pGPM = row.insertCell(9);
            var pHD = row.insertCell(10);
            var pTD = row.insertCell(11);

            hName.innerHTML = "Hero";
            pLevel.innerHTML = "Level";
            pKills.innerHTML = "Kills";
            pDeaths.innerHTML = "Deaths";
            pAssists.innerHTML = "Assists";
            pGold.innerHTML = "Gold";
            pLH.innerHTML = "Last Hits";
            pDN.innerHTML = "Denies";
            pXPM.innerHTML = "XP Per Min";
            pGPM.innerHTML = "Gold Per Min";
            pHD.innerHTML = "Hero Damage";
            pTD.innerHTML = "Turret Damage";
            for(var i = 5; i < 10; i++){
                
                var row = table.insertRow(-1);
                row.className = "text-center";
                
                var hName = row.insertCell(0);
                hName.className = "text-left";
                
                var pLevel = row.insertCell(1);
                var pKills = row.insertCell(2);
                var pDeaths = row.insertCell(3);
                var pAssists = row.insertCell(4);
                var pGold = row.insertCell(5);
                var pLH = row.insertCell(6);
                var pDN = row.insertCell(7);
                var pXPM = row.insertCell(8);
                var pGPM = row.insertCell(9);
                var pHD = row.insertCell(10);
                var pTD = row.insertCell(11);
                
                hName.innerHTML = returnName(data.result.players[i].hero_id);
                pLevel.innerHTML = data.result.players[i].level;
                pKills.innerHTML = data.result.players[i].kills;
                pDeaths.innerHTML = data.result.players[i].deaths;
                pAssists.innerHTML = data.result.players[i].assists;
                pGold.innerHTML = data.result.players[i].gold;
                pLH.innerHTML = data.result.players[i].last_hits;
                pDN.innerHTML = data.result.players[i].denies;
                pXPM.innerHTML = data.result.players[i].xp_per_min;
                pGPM.innerHTML = data.result.players[i].gold_per_min;
                pHD.innerHTML = data.result.players[i].hero_damage;
                pTD.innerHTML = data.result.players[i].tower_damage;
            }
            
            
            function returnName(heroID){
                for (var i = 0; i < heroData.result.heroes.length; i++){
                    if (heroData.result.heroes[i].id == heroID){
                        return heroData.result.heroes[i].localized_name;
                        break; 
                    }
                }
                return null;
            }
        }
    }
    
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    data = JSON.parse(hr.responseText);

	    }
    }
    
    
    
    
    
    console.log(data);
    hr.send(null);
    hl.send(null);
}