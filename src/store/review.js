import axios from 'axios'

export default {
    
    namespaced: true,

    state: () => ({
        analysisList:[],
        analysis:{},
    }),

    getters: {},

    mutations: {

        updateState(state, payload){
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },

    },

    actions: {

        async searchAnalysisList({commit}, payload){

            try{
                
                console.log(payload)
                const res = await _fetchAnalysisList(payload)

                const analysisList = res.data.content.list
                console.log(res)
                console.log(analysisList)

                commit('updateState',{
                    analysisList
                })

            } catch (error) {
                console.log(error)
            }

        },

        async searchAnalysisWithId({commit}, payload) {

            try{

                console.log(payload)
                
                const res = await _fetchAnalysis(payload)

                const analysis = res.data.content
                console.log(res)
                console.log(analysis)
                commit('updateState',{
                    analysis
                })

            }catch (error){
                console.log(error)
            }
        }

    }
}

async function _fetchAnalysisList(payload){
    return await axios.post('/api/review-anals', payload)
}

async function _fetchAnalysis(payload){
    return await axios.post('/api/review-anals/detail', payload)
}