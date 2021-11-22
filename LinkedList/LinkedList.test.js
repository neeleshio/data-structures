const LinkedList = require("./LinkedList")

describe('LinkedList', () => {
    it('should construct a list', () => {
        const linkedList = new LinkedList(1)

        expect(linkedList.toString()).toBe(1)
        // console.log(linkedList)

        expect(linkedList.head.value).toBe(1)
        expect(linkedList.head.next).toBeNull()
        expect(linkedList.tail.value).toBe(1)
        expect(linkedList.tail.next).toBeNull()
        expect(linkedList.length).toBe(1)
    })

    test('should push node to end of linkedlist', () => {
        // const linkedList = new LinkedList(1)
        // const newNode = linkedList.newNode(2)
    })
})
