import { useEffect, useState } from 'react';

import { Modal } from '@/components/modal';

import styles from './setting.module.css';

interface SettingProps {
  onChange: (newTimes: Record<string, number>) => void;
  onClose: () => void;
  show: boolean;
  times: Record<string, number>;
}

export function Setting({ onChange, onClose, show, times }: SettingProps) {
  const [values, setValues] = useState<Record<string, number | string>>(times);

  useEffect(() => {
    if (show) setValues(times);
  }, [times, show]);

  const handleChange = (id: string) => (value: number | string) => {
    setValues(prev => ({
      ...prev,
      [id]: typeof value === 'number' ? value * 60 : '',
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newValues: Record<string, number> = {};

    Object.keys(values).forEach(name => {
      newValues[name] =
        typeof values[name] === 'number' ? values[name] : times[name];
    });

    onChange(newValues);
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    onClose();
  };

  return (
    <Modal lockBody={false} show={show} onClose={onClose}>
      <h2 className={styles.title}>更改时间</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Field
          id="pomodoro"
          label="番茄时钟"
          value={values.pomodoro}
          onChange={handleChange('pomodoro')}
        />
        <Field
          id="short"
          label="短暂休息"
          value={values.short}
          onChange={handleChange('short')}
        />
        <Field
          id="long"
          label="长时间休息"
          value={values.long}
          onChange={handleChange('long')}
        />

        <div className={styles.buttons}>
          <button type="button" onClick={handleCancel}>
            取消
          </button>
          <button className={styles.primary} type="submit">
            保存
          </button>
        </div>
      </form>
    </Modal>
  );
}

interface FieldProps {
  id: string;
  label: string;
  onChange: (value: number | string) => void;
  value: number | string;
}

function Field({ id, label, onChange, value }: FieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label} <span>(分钟)</span>
      </label>
      <input
        className={styles.input}
        max={120}
        min={1}
        required
        type="number"
        value={typeof value === 'number' ? value / 60 : ''}
        onChange={e => {
          onChange(e.target.value === '' ? '' : Number(e.target.value));
        }}
      />
    </div>
  );
}
