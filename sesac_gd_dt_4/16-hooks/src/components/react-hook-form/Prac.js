import React from 'react';
import { useForm } from 'react-hook-form';

export default function Prac() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const onSubmit = (data) => {
        console.log('폼 제출 성공 : ', data);
    };

    const onError = (err) => {
        console.log('폼 제출 실패 : ', err);
    };
    const name = watch('name');
    const age = watch('age');
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <label htmlFor="name"></label>
                <input
                    type="text"
                    placeholder="name"
                    id="name"
                    {...register('name', {
                        required: '이름은 필수 항목입니다.',
                        minLength: { value: 2, message: '이름은 최소 2글자!' },
                        pattern: {
                            value: /^[가-힣]{2,5}$/,
                        },
                    })}
                />
                <br />
                <label htmlFor="age"></label>
                <input
                    type="text"
                    placeholder="age"
                    id="age"
                    {...register('age', {
                        required: '0이상의 숫자만 입력 가능합니다',
                        pattern: { value: /^[0-9]+$/, message: '숫자는 0이상' },
                    })}
                />
                <br />
                <button type="submit">제출</button>
                {errors.name?.message}
                <br />
                {errors.age?.message}
            </form>
            username:{name}, age:{age}
        </div>
    );
}
