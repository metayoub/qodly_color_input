import config, { IColorInputProps } from './ColorInput.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './ColorInput.build';
import Render from './ColorInput.render';

const ColorInput: T4DComponent<IColorInputProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

ColorInput.craft = config.craft;
ColorInput.info = config.info;
ColorInput.defaultProps = config.defaultProps;

export default ColorInput;
