import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import Button from './components/Button'
import Display from './components/Display'

export default class App extends Component {
  state = {
    displayValue: '0'
  }

  addDigit = n => {
    this.setState({ displayValue: n })
  }

  clearMemory = () => {
    this.setState({ displayValue: '0' })
  }

  setOperation = operation => {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label='Ac' lg onClick={this.clearMemory} />
          <Button label='/' operation onClick={() => this.setOperation('/')} />
          <Button label='7' onClick={() => this.addDigit(7)} />
          <Button label='8' onClick={() => this.addDigit(8)}/>
          <Button label='9' onClick={() => this.addDigit(9)} />
          <Button label='*' operation onClick={() => this.setOperation('/')} />
          <Button label='4' onClick={() => this.addDigit(4)} />
          <Button label='5' onClick={() => this.addDigit(5)} />
          <Button label='6' onClick={() => this.addDigit(6)} />
          <Button label='-' operation onClick={() => this.setOperation('/')} />
          <Button label='1' onClick={() => this.addDigit(1)} />
          <Button label='2' onClick={() => this.addDigit(2)} />
          <Button label='3' onClick={() => this.addDigit(3)} />
          <Button label='+' operation onClick={() => this.setOperation('/')} />
          <Button label='0' md onClick={() => this.addDigit(0)} />
          <Button label='.' onClick={() => this.addDigit('.')} />
          <Button label='=' operation onClick={() => this.setOperation('/')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
