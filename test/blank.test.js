class Fixture extends React.Component {
  render () {
    return (
      <div id='parent'>
        <div id='child'>
        </div>
      </div>
    )
  }
}

const it = createTest(<Fixture />)

describe('#blank', () => {
  describe('()', () => {
    it('passes when the actual matches the expected', (wrapper) => {
      expect(wrapper.find('#child')).to.be.blank()
    })

    it('passes negated when the actual does not match the expected', (wrapper) => {
      expect(wrapper.find('#parent')).to.not.be.blank()
    })

    it('fails when the actual does not match the expected', (wrapper) => {
      expect(() => {
        expect(wrapper.find('#child')).to.not.be.blank()
      }).to.throw(`not to be empty`)

      expect(() => {
        expect(wrapper.find('#parent')).to.be.blank()
      }).to.throw(`to be empty`)
    })
  })
})
