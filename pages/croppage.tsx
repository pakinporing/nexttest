import React, { useState, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addProducts } from '../redux/productsSlice';
import Link from 'next/link';
import AvatarEditor from 'react-avatar-editor';
import Dropzone, { FileRejection } from 'react-dropzone';
import Image from 'next/image';
interface AvatarUploaderProps { }

const AvatarUploader: React.FC<AvatarUploaderProps> = () => {

    const { products } = useSelector((state: RootState) => state.products)
    const dispatch = useDispatch();
    const router = useRouter();
    const { name } = router.query;
    const foundProduct = products.find((el) => el.productName === name);

    console.log('foundProduct', foundProduct)

    // interface FormData {
    //     productName: string;
    //     productDetail: string;
    //     price: any;
    //     productImg: any
    // }

    // const [formData, setFormData] = useState<FormData>({
    //     productName: '',
    //     productDetail: '',
    //     price: '',
    //     productImg: null
    // });

    // useEffect(() => {
    //     if (foundProduct) {
    //         setFormData({
    //             productName: foundProduct.productName,
    //             productDetail: foundProduct.productDetail,
    //             price: foundProduct.price,
    //             productImg: foundProduct.productImg || null
    //         });
    //     }
    // }, [foundProduct]);


    // console.log('formData', formData)









    const [image, setImage] = useState<File | null>(null);
    const [imageTest, setImageTest] = useState<any>(foundProduct?.productImg);
    const [editor, setEditor] = useState<any>(null);
    const [scale, setScale] = useState<number>(1);
    console.log('imagetest pakin', typeof imageTest, imageTest)
    const handleDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            setImage(file);
        }
    };

    const handleScaleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newScale = parseFloat(e.target.value);
        setScale(newScale);
    };

    const handleSave = () => {
        if (editor && image) {
            const canvas = editor.getImageScaledToCanvas();
            const croppedImage = canvas.toDataURL();
            // Now you can save the cropped image or send it to your server
            console.log(croppedImage);
            setImageTest(croppedImage)
        }
    };

    return (
        <div>
            <Image
                className="w-1/2  object-cover overflow-hidden"
                src={imageTest}
                alt='name'
                width={200}
                height={200}
            />
            <Dropzone onDrop={handleDrop}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()} style={dropzoneStyle}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop an image here, or click to select a file</p>
                        </div>
                    </section>
                )}
            </Dropzone>
            {image && (
                <div>
                    <AvatarEditor
                        ref={(editor: any) => setEditor(editor)}
                        image={image}
                        width={200}
                        height={200}
                        border={50}
                        color={[255, 255, 255, 0.6]} // RGBA
                        scale={scale}
                    />
                    <div>
                        <label>Zoom:</label>
                        <input
                            type="range"
                            min="1"
                            max="3"
                            step="0.01"
                            value={scale}
                            onChange={handleScaleChange}
                        />
                    </div>
                    <button onClick={handleSave}>Save</button>
                </div>
            )}
        </div>
    );
};

const dropzoneStyle: React.CSSProperties = {
    width: '200px',
    height: '200px',
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
};

export default AvatarUploader;
