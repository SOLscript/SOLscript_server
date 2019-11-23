const user = require('../../model/user');


const welcome = async (agent) => {
    let params = agent.request_.body.queryResult.parameters;

    // let feel = params.Feel;
    // let category = params.Category;
    // let price = params.Price;

    let prefer = []
    prefer = prefer.concat(params.Feel);
    prefer = prefer.concat(params.Category);
    prefer = prefer.concat(params.Price);

    let userModel = new user();
    userModel.prefer.push(prefer);

    try {
        const addPerfer = await userModel.save();
    } catch (err) {
        if (err) {
            console.log(`err: ${err}`);
        }
    }
    console.log('Create user prefer완료!');
    res.json({
        message: "create sucess!",
        data: {
            user: addPerfer
        }
    })
    

    query = `감사합니다. 고객님. 선택해주신  '${prefer}'  와 같은 키워드를 기준으로 추천 알고리즘이 작동됩니다.`;
    agent.add(query);
}
