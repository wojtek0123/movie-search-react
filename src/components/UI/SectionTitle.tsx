import classes from './SectionTitle.module.scss';

const SectionTitle: React.FC<{ children: string}> = ({children}) => {
  return <h3 className={classes.sectionTitle}>{children}</h3>
}

export default SectionTitle;