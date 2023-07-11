import { motion, AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';
import { CustomButton } from '../components';

import state from '../store'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.div {...slideAnimation("down")}>
            <img
              src="src/public/threejs.png"
              alt='logo'
              className="w-8 h-8 object-contain"
            />
          </motion.div>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div>
              <h1 className='head-text'>
                LET'S <br className='xl:block hidden' /> DO IT.
              </h1>
            </motion.div>

            <motion.div
              {...headContainerAnimation}
              className='flex flex-col gap-5'
            >
              <p className='max-w-md font-normal text-grey-600 text-base'>
                Create your uniq and awesome design <strong>GO GO GO</strong>
              </p>

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home