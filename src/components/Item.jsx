import {useSpeechSynthesis} from 'react-speech-kit'
import {BsVolumeUp} from 'react-icons/bs'

const Item = ({expression}) => {
  const {speak, speaking, voices} = useSpeechSynthesis()

  const voiceIt = async (text) => {
    await speak({
      text: expression.text,
    })
  }

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {expression.text}
      <button className='btn btn-secondary' onClick={voiceIt}>
        {speaking ? <BsVolumeUp /> : 'Speak'}
      </button>
    </li>
  )
}
export default Item
