import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import _ from 'lodash'

const store = createStore({
    plugins: [
        createPersistedState()
    ],
    state () {
        return {
            count: 0,
            todoitems: [],
            themes: {
                default: {
                    dark: true,
                    colors: {
                        primary: '#0f1116',
                        secondary: '#DCEDFF',
                        accent: '#A2FAA3',
                        error: '#f05d5e',
                        info: '#627264',
                        success: '#627264',
                        warning: '#f05d5e',
                    }
                },
                coriander: {
                    dark: true,
                    colors: {
                        primary: '#0f1116',
                        secondary: '#DCEDFF',
                        accent: '#A2FAA3',
                        error: '#f05d5e',
                        info: '#627264',
                        success: '#627264',
                        warning: '#f05d5e',
                    }
                },
                corianderlight: {
                    dark: false,
                    colors: {
                        primary: '#DCEDFF',
                        secondary: '#0f1116',
                        accent: '#A2FAA3',
                        error: '#f05d5e',
                        info: '#627264',
                        success: '#627264',
                        warning: '#f05d5e',
                    }
                }
            },
            selectedTheme: 'default'
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },
        addtditem (state, item) {
            state.todoitems.push(item)
        },
        edittditem (state, data) {
            const index = _.findIndex(state.todoitems, { id: data.id })
            if (index < 0) return
            console.log(data.title)
            console.log(index + ': ' + JSON.stringify(state.todoitems[index]))
            state.todoitems[index].title = data.title

            console.log(index + ': ' + JSON.stringify(state.todoitems[index]))

        },
        selectitem (state, data) {
            const index = _.findIndex(state.todoitems, (o) => { return o.id === data.id })
            state.todoitems[index].selected = data.selected
        },
        deleteitems (state) {
            state.todoitems = _.filter(state.todoitems, (o) => { return !o.selected })
        },
        changeSelectedTheme (state, newTheme) {
            if (hasOwnProperty(state.themes, newTheme)) {
                state.selectedTheme = newTheme
            }
        }
    }
})

export default store