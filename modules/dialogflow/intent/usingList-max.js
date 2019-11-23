const user = require('../../../model/user');


module.exports = async (agent) => {
    const findUser = await user.findOne();
    const screenTime = findUser.usage;

    screenTime.sort((a, b) => {
        return b.time[11] - a.time[11]
    })

    let result = []
    for (let i=0; i<5; i++) {
        result.push(screenTime[i].name)
    }

    const query = `가장 많이 사용한 서비스는 TOP5는 ${result} 입니다.`;
    await agent.add(query);
}