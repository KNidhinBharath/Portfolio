const topic = ['Astrology','Inspirational','Jokes']

const randTop = () => {
    const rannum = Math.floor(Math.random() * 3)
    return topic[rannum];
}
const topSel =() => {
    const sel = randTop()
    if(sel === 'Astrology')
        {
          astrology()
        }
    
    else if(sel === 'Inspirational')
        {
          inspirational()
        } 
    
    else if(sel === 'Jokes')
        {
            jokes()
        }
    
}

const astrology = () => {
    const arr1 = ['Today is','Yesterday was','Tomorrow will be']
    const arr2 = ['good','average','bad']
    const arr3 = ['Leo','Taurus','Gemini','Cancer','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces']
    //console.log('vada')
    const ran1 = Math.floor(Math.random() * arr1.length)
    const ran2 = Math.floor(Math.random() * arr2.length)
    const ran3 = Math.floor(Math.random() * arr3.length)

    console.log('Astrology : '+arr1[ran1] + ' ' + arr2[ran2] + ' ' + 'for ' + arr3[ran3])
}

const inspirational = () => {
    const arr1 = ['We talk on principal, but act on motivation','The secret of getting ahead is getting started','Winners never quit, and quitters never win','When the going gets tough, the tough get going']
    const ran1 = Math.floor(Math.random() * arr1.length)
    console.log('Inspirational : '+arr1[ran1])
}

const jokes = () => {
    const arr1 = ['What do you call it when a snowman has a temper tantrum? A meltdown','What do you call advice from a cow? Beef Tips','What has a bed that you can’t sleep in? A river']
    const ran1 = Math.floor(Math.random() * arr1.length)
    console.log('Jokes: '+arr1[ran1])
}

topSel()