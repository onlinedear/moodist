import { IoMoonSharp } from 'react-icons/io5/index';

import { useSleepTimerStore } from '@/stores/sleep-timer';
import { Item } from '../item';

interface SleepTimerProps {
  open: () => void;
}

export function SleepTimer({ open }: SleepTimerProps) {
  const active = useSleepTimerStore(state => state.active);

  return (
    <Item
      active={active}
      icon={<IoMoonSharp />}
      label="睡眠定时器"
      shortcut="Shift + T"
      onClick={open}
    />
  );
}
