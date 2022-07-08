import {useState} from 'react'
import {useSpeechSynthesis} from 'react-speech-kit'

const Speech = () => {
  const [text, setText] = useState('')
  const {speak, speaking, voices} = useSpeechSynthesis()

  const voiceIt = async () => {
    if (!text) {
      return
    }
    await speak({
      text,
    })
  }

  return (
    <div className='row'>
      <hr />
      <div className='mb-3'>
        <label className='form-label fw-bold'>EMERGENCY SPEECH</label>
        {speaking ? (
          <h1 className='display-3 text-center'>Speaking...</h1>
        ) : (
          <textarea
            className='form-control'
            id='exampleFormControlTextarea1'
            rows='3'
            value={text}
            onInput={(e) => setText(e.target.value)}
          ></textarea>
        )}

        <div className='d-grid mt-2'>
          <button
            className='btn btn-lg btn-secondary'
            type='button'
            onClick={voiceIt}
          >
            SPEECH
          </button>
        </div>
      </div>
    </div>
  )
}
export default Speech
