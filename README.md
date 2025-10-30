npm i 

devlopment

for run: npm run dev
for build: npm run build

run compiled version of code:

npm start


Root page

src/app/page

<layout>        //not mandatory
    <error>     //not mandatory
        <page>  // mandatory
    <error>
<layout>

npm run build -- --profile
aws s3 sync ./out s3://aavyalabs

from local cli:

npm run build -- --profile
cd out
aws s3 cp temp.zip s3://aavyalabs

on cloudshell:

aws s3 cp s3://aavyalabs/temp.zip tmp.zip
unzip -d temp_contents tmp.zip
aws s3 sync temp_contents s3://aavyalabs
rm -rf tmp.zip temp_contents


============EC2 Instance===============

hosted folder:
/opt/aavyalabs/aavyalabs-web/


======typography======
<h1 className="text-secondary-veryDark md:text-3xl mb-2 font-bold"></h1>
<h2 className="text-secondary-veryDark md:text-2xl mt-4 font-bold"></h2>
<ul className="list-outside list-disc ml-4 leading-8 md:text">
    <li className="text-secondary-light ml-2">
    </li>
</ul>

<ImageWithFallback
            src={GenStudio}
            alt=""
            fill={true}
            className="object-contain group-hover:scale-125 group-hover:transition-all group-hover:duration-700  duration-500 rounded-md !relative"
/>




