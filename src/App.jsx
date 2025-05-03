import Greeting from './Greeting';
import Message from './Message';
import Button from './Button';

export default function App () {

  return (

    <>
      <Greeting name = 'Ivan' />
      <Message text = 'blah blah blah'/>
      <Button onClick = {() => console.log('button clicked')}></Button>
    </>
  )
}