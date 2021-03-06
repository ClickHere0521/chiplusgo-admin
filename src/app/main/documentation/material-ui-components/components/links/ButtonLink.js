/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from '@material-ui/core/Link';

export default function ButtonLink() {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
      Button Link
    </Link>
  );
}
