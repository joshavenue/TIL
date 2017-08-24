var moonPhase = 'haha';

switch (moonPhase){
  case 'full':
    console.log('Howll');
    break;
  case 'mostly full':
    console.log('arm are getting hairy');
    break;
  case 'mostly new':
    console.log('back on two feet');
    break;
  default:
    console.log('invalid moon phase');
    break;
                 }


//this is the same with below //
var moonPhase = 'full'

if(moonPhase === 'full'){
  console.log('Howll');
}else if(moonPhase === 'mostly full'){
  console.log('Arm are getting hairy');
}else if(moonPhase === 'mostly new'){
  console.log('back on two feet');
}else{
  console.log('invalid moon phase');
}
