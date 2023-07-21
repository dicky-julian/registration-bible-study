type PlaceholderProps  = {
    width?: number | string;
    height?: number | string;
    children?: JSX.Element;
    speed?: number;
}

export const Placeholder  = (props: PlaceholderProps) => (
    <div 
        className='progress_placeholder' 
        style={{ 
            width: props.width ?? '100%', 
            height: props.height ?? '100%',
            animationDuration: `${props.speed ?? '1.7'}s`
        }}
    >
        <div className='progress_placeholder_item'></div>
        {props.children ? (
            <div className='progress_placeholder_child'>
                {props.children}
            </div>
        ) : null}
    </div>
)