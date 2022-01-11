import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import classes from './ThingItem.module.css';

const ThingItem = (props) => {
    console.log(`ThingItem ... `, props);

    const t = props.thing;

    return (
        <li className={classes.item}>
            <Link to={'/thing'} state={props.thing}>
                <Card>
                    <img src={t.image} alt={t.title} />
                    <div className={classes.content}>
                        <p>
                            {t.title}
                            <span>{t.subtitle}</span>
                        </p>
                    </div>
                </Card>
            </Link>
        </li>
    );
};

export default ThingItem;
