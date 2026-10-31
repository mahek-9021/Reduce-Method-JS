let cl=console.log;

var companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];


// UpperCase category

let result = companies.reduce((acc,cv)=>{
acc.push(cv.category.toUpperCase())
    return acc;

},[]);
cl(result);


let result1=companies.reduce((acc,cv)=>{
    acc.push({
        companyname:cv.name,
        duration:`${cv.end-cv.start} years`
    })
    return acc;
},[]);
cl(result1)


let result2=companies.reduce((acc,cv)=>{
    acc.push({
        companyname:cv.name,
        duration:cv.end - cv.start,
        longRunning: cv.end - cv.start >= 20
    });


return acc;
    },[]);

cl(result2)


result3=companies.reduce((acc,cv)=>{
    acc.push({
        companyname:cv.name,
        category:cv.category.toUpperCase()
        });
        return acc;
    },[]);
cl(result3)