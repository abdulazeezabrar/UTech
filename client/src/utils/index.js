export const hasRole = (user, role) => (user && user.type.hasOwnProperty(role))
