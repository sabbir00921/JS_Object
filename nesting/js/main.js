let myObject = {
    fristName: "sabbir",
    lastName: "hossain",
    age: 29,
    occupation : "software engineer",
    experienceTechnology:{
        frontEnd: ["html", "CSS", "Bootstrap", "tailwind",{
            program: "React",
            category: "Dynamic"
        },],
        backEnd: ["React","MongoDB", "Node.js","Express.js"],
        markup: function(){
            let markupLan =[];
            for(let name of this.frontEnd){
                if(name === "html" || name =="CSS"){
                    // console.log(name)
                    markupLan.push(name);
                }
                // console.log(name);
            }
            console.log(markupLan)
            
        },
        
    },
    education:{
        ssc: "DKNAHS",
        diploma: "Sylhet Polytecnic Institute",
        graduation: "Daffodil International University",
        mern: "Creative IT institute",
    }

}
myObject.experienceTechnology.frontEnd

console.log(myObject.experienceTechnology.frontEnd[4].program)