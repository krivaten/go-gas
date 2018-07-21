import * as React from 'react'
import Button from '@/components/atoms/Button'

export default class App extends React.Component {
  private check(e: React.MouseEvent<HTMLButtonElement>): void {
    console.log(e.target)
  }

  render() {
    return (
      <div>
        <p>Hello... React</p>
        <Button onClick={this.check}>Click Me</Button>
      </div>
    )
  }
}
