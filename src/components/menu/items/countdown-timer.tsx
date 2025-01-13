import { MdOutlineTimer } from 'react-icons/md/index';

import { Item } from '../item';

export function CountdownTimer() {
  return (
    <Item
      href="https://time.moodist.cn/"
      icon={<MdOutlineTimer />}
      label="倒计时器"
    />
  );
}
