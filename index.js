function saturdayFun(activity) {
  activity = activity || 'roller-skate';
  return `This Saturday, I want to ${activity}!`;
}
function mondayWork(work){
    work = work || `go to the office`;
    return `This Monday, I will ${work}.`;
}
function wrapAdjective(adj){
    return function(str){
        return `You are ${adj}${str}${adj}!`
    }
}
wrapAdjective("*") ("a dedicated programer");
wrapAdjective("||")("a dedicated programer");