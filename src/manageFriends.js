export function manageFriends(state, action) {
  // your code here

  switch (action.type) {
    case "friends/add":
      return { friends: [ ...state.friends, action.payload ] }
    case "friends/remove":
      const filteredFriends = state.friends.filter(friend => friend.id != action.payload)
      return { friends: filteredFriends }
    default:
      return state

  }
}
