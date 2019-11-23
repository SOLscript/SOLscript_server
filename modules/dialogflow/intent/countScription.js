const user = require('../../../model/user');


module.exports = async (agent) => {
    const findUser = await user.findOne();
    const subscriptList = findUser.subList;

    const query = `현재 구독중인 서비스의 수는 ${subscriptList.length} 입니다.`;
    await agent.add(query);
}