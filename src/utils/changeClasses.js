import $ from 'jquery';
import cl from '../components/UI/MySelect/MySelect.module.css'

const changeSelectClass = (classList) => {
    const targetClasses = classList[0];
        if (targetClasses.includes('first')){
            $('.first').addClass(`${cl.selected}`)
            $('.second').removeClass(`${cl.selected}`)
            $('.third').removeClass(`${cl.selected}`)
        }
        else{
            if (targetClasses.includes('second')){
                $('.second').addClass(`${cl.selected}`)
                $('.first').removeClass(`${cl.selected}`)
                $('.third').removeClass(`${cl.selected}`)
            }
            else{
                if (targetClasses.includes('third')){
                    $('.third').addClass(`${cl.selected}`)
                    $('.first').removeClass(`${cl.selected}`)
                    $('.second').removeClass(`${cl.selected}`)
                }
            }
        }
}

export default changeSelectClass;