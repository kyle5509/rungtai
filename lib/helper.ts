export const getRandomBackgroundColor = () => {
    const colors = ['red', 'green', 'purple', 'orange',]
    const rand = Math.floor(Math.random() * colors.length)
    return colors[rand]
}

export const Naira = "₦"


export const variant = {
    initial: {
        opacity: 0,
    },
    animate:{
        opacity: 1,
        transition: {
            duration: .5
        }
    }

}