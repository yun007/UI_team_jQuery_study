(function(){

    var question = document.querySelectorAll('.question li'),
        answerLi = document.querySelectorAll('.answer li'),
        answer = document.querySelector('.answer'),        
        allPerson = ['윤효상', '신비', '김희진', '홍수조', '권은주', '김원진', '최은혜', '문채민', '이형주', '조현욱', '윤홍미', '김지혜'],
        ui2 =[6,7,10],
        random = Math.floor((Math.random()*4) );

        /* Q1 */
        answer1 = allPerson.filter(function(value, index) {
            return ui2.indexOf(index) == -1;
        });       

        /* Q2 */
        answer2 = answer1.filter(function(value, index) {
            //console.log('index', index)
            return index % 2  === 0;
        });
        
        /* Q3 */
        hunter = answer2.filter(function(value, index){
            //console.log(value)
            return index+1;        
        });  
        
        answer3 = hunter.splice(random,2);

        //deadOrAlive = allPerson.concat(answer3);

         die = allPerson.filter(function(index){
            return answer3.indexOf(index) == -1;
         });

        

        //console.log('hunter',hunter, "die", die)
        /* Q4 */
        
        //console.log(answer3)
        answer4 = {
            alive : 'alive '+answer3,
            Die : 'Die '+die
        }

        var listValue = [answer1,answer2,answer3,answer4.alive,answer4.Die]

    // console.log("All-member",allPerson);
    // console.log("Q1",answer1);
    // console.log("Q2",answer2);
    // console.log("Q3",answer3);
    // console.log("Q4","Alive : ", answer4.alive, "Die : ", answer4.Die);
    // console.log(listValue) 

        /* create li element */
        function answer_list(){
            
            for( i=0 ; i < listValue.length; i++){
                li = document.createElement("li");
                answer.appendChild(li);  
                li.append('Answer'+(i+1)+ ' ' +listValue[i])          
            };                                    
        }
        answer_list()    
        
        console.log(allPerson.join(','))
}());

