//score tracker inside closure with methods to addscore() and getscore()
function scoreTracker(){
    let score =0;
    return{
        addscore: function(points){
            score += points;
            return score;
        },

        getscore: function(){
            return score;
        }
    }
};

let myscore = scoreTracker();
console.log(myscore.addscore(10));
console.log(myscore.addscore(20));
console.log(myscore.getscore());