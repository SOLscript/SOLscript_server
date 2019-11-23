module.exports = async (agent) => {
    
    console.log(agent.request_.body.queryResult.parameters);
    await agent.add('될까?')
}