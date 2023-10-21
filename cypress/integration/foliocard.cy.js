import Foliocard from '@/components/foliocard'
import '@/app/globals.css'

describe('Foliocard', () => {
    const mockData = {
        id: 1,
        title: 'Title'
    }

    it('renders', () => {
        cy.mount(<Foliocard {...mockData} />)
    })
})
