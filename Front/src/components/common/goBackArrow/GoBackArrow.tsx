import { ChevronLeftIcon } from '@heroicons/react/solid';
import history from '../../../routes/history';

const GoBackArrow = () => {
  const goBack = () => {
    history.back();
  };

  return (
    <div className="flex items-center  cursor-pointer" onClick={goBack} data-testid="goBackArrow">
      <ChevronLeftIcon className="text-white w-8 " />
      <h4>Go back</h4>
    </div>
  );
};

export default GoBackArrow;
